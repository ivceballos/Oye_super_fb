"use client";

import { useState } from "react";
import { generateVoiceResponse } from "@/ai/flows/voice-response";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const VoiceResponse = () => {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleVoiceResponse = async () => {
    setIsLoading(true);
    try {
      const result = await generateVoiceResponse({ command });
      setResponse(result.response);
    } catch (error) {
      console.error("Error generating voice response:", error);
      setResponse("Error al generar la respuesta de voz.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sistema de Respuesta de Voz</CardTitle>
        <CardDescription>Genera respuestas de voz ácidas, divertidas y teatrales</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {/* Prevent LastPass from injecting content */}
        <div style={{ position: "relative" }}>
          <Input
            type="text"
            placeholder="Introduce el comando de voz"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
          />
        </div>
        <Button onClick={handleVoiceResponse} disabled={isLoading}>
          {isLoading ? "Generando..." : "Generar Respuesta de Voz"}
        </Button>
        {response && (
          <div>
            <h3>Respuesta:</h3>
            <p>{response}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VoiceResponse;
