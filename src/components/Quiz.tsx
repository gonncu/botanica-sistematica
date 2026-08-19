"use client";

import { useState } from "react";
import { cladosTree, especiesData } from "@/data/clados";
import { CladoNode, Especie } from "@/types";

interface QuizProps {
  onComplete: (especie: Especie) => void;
}

export default function Quiz({ onComplete }: QuizProps) {
  const [currentNodeId, setCurrentNodeId] = useState<string>("root");
  const [history, setHistory] = useState<string[]>(["root"]);

  const currentNode: CladoNode | undefined = cladosTree[currentNodeId];

  if (!currentNode) {
    return <div className="p-4 text-red-600">Error: Clado no encontrado</div>;
  }

  // Determinar si es una especie terminal
  let finalEspecie: Especie | undefined = undefined;
  
  if (currentNode.especie) {
    finalEspecie = currentNode.especie;
  }

  // Si no tiene especie en el nodo, buscar en las opciones
  if (!finalEspecie && (!currentNode.opcionA.nextNodeId && !currentNode.opcionA_prima.nextNodeId)) {
    // Es nodo terminal, buscar la especie
    if (currentNode.opcionA.especieId) {
      finalEspecie = especiesData[currentNode.opcionA.especieId];
    } else if (currentNode.opcionA_prima.especieId) {
      finalEspecie = especiesData[currentNode.opcionA_prima.especieId];
    }
  }

  if (finalEspecie) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          ¡Especie identificada!
        </h2>
        <div className="space-y-3">
          <p>
            <strong>Nombre Científico:</strong> {finalEspecie.nombreCientifico}
          </p>
          <p>
            <strong>Nombre Vulgar:</strong> {finalEspecie.nombreVulgar}
          </p>
          <p>
            <strong>Familia:</strong> {finalEspecie.familia}
          </p>
          <p>
            <strong>Descripción:</strong> {finalEspecie.descripcion}
          </p>
          <p>
            <strong>Características:</strong> {finalEspecie.caracteristicas}
          </p>
          <p>
            <strong>Distribución:</strong> {finalEspecie.distribucion}
          </p>
        </div>

        <div className="mt-6 space-x-3">
          <button
            onClick={() => onComplete(finalEspecie)}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Continuar a Formulario
          </button>
          <button
            onClick={() => {
              setCurrentNodeId("root");
              setHistory(["root"]);
            }}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
          >
            Reiniciar Quiz
          </button>
        </div>
      </div>
    );
  }

  const handleOption = (opcion: "A" | "A_prima") => {
    const nextOption = opcion === "A" ? currentNode.opcionA : currentNode.opcionA_prima;
    
    // Si la opción tiene una especie asociada
    if (nextOption.especieId) {
      const especie = especiesData[nextOption.especieId];
      if (especie) {
        onComplete(especie);
        return;
      }
    }
    
    // Si tiene un siguiente nodo
    if (nextOption.nextNodeId) {
      setCurrentNodeId(nextOption.nextNodeId);
      setHistory([...history, nextOption.nextNodeId]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <span className="text-sm text-gray-500">
          Paso {history.length} del quiz
        </span>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {currentNode.descripcion}
      </h2>

      <div className="space-y-3">
        <button
          onClick={() => handleOption("A")}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-left"
        >
          <span className="font-bold">A.</span> {currentNode.opcionA.label}
        </button>

        <button
          onClick={() => handleOption("A_prima")}
          className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 text-left"
        >
          <span className="font-bold">A&apos;.</span> {currentNode.opcionA_prima.label}
        </button>
      </div>

      {history.length > 1 && (
        <button
          onClick={() => {
            const newHistory = history.slice(0, -1);
            setHistory(newHistory);
            setCurrentNodeId(newHistory[newHistory.length - 1]);
          }}
          className="mt-4 text-gray-600 hover:text-gray-800 underline"
        >
          ← Volver atrás
        </button>
      )}
    </div>
  );
}
