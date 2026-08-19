"use client";

import { useState } from "react";
import { cladosTree, especiesData } from "@/data/clados";
import { CladoNode, Especie } from "@/types";

interface QuizProps {
  onComplete: (especie: Especie) => void;
}

interface HistoryEntry {
  nodeId: string;
  keyStep?: string;
}

export default function Quiz({ onComplete }: QuizProps) {
  const [currentNodeId, setCurrentNodeId] = useState<string>("root");
  const [history, setHistory] = useState<HistoryEntry[]>([{ nodeId: "root" }]);
  const [identifiedEspecie, setIdentifiedEspecie] = useState<Especie | null>(
    null
  );

  const currentNode: CladoNode | undefined = cladosTree[currentNodeId];
  const keyPath = history
    .map((entry) => entry.keyStep)
    .filter(Boolean)
    .join(" > ");

  if (!currentNode) {
    return <div className="p-4 text-red-600">Error: Clado no encontrado</div>;
  }

  // Determinar si es una especie terminal
  let finalEspecie: Especie | undefined = identifiedEspecie || undefined;
  
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
        {keyPath && (
          <p className="mb-4 text-sm text-gray-700">
            Recorrido en la clave: <span className="font-semibold">{keyPath}</span>
          </p>
        )}
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
              setHistory([{ nodeId: "root" }]);
              setIdentifiedEspecie(null);
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
        const keyStep = nextOption.keyStep || (opcion === "A" ? "A" : "A'");
        setHistory([...history, { nodeId: currentNodeId, keyStep }]);
        setIdentifiedEspecie(especie);
        return;
      }
    }
    
    // Si tiene un siguiente nodo
    if (nextOption.nextNodeId) {
      const keyStep = nextOption.keyStep || (opcion === "A" ? "A" : "A'");
      setCurrentNodeId(nextOption.nextNodeId);
      setHistory([...history, { nodeId: nextOption.nextNodeId, keyStep }]);
      setIdentifiedEspecie(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <span className="text-sm text-gray-500">
          Paso {history.length} del quiz
        </span>
        {keyPath && (
          <p className="mt-2 text-sm text-gray-700">
            Recorrido en la clave: <span className="font-semibold">{keyPath}</span>
          </p>
        )}
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
            setCurrentNodeId(newHistory[newHistory.length - 1].nodeId);
            setIdentifiedEspecie(null);
          }}
          className="mt-4 text-gray-600 hover:text-gray-800 underline"
        >
          ← Volver atrás
        </button>
      )}
    </div>
  );
}
