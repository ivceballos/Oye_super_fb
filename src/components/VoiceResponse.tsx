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
      setResponse("Error generating voice response.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Voice Response System</CardTitle>
        <CardDescription>Generate acid, funny, and theatrical voice responses</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {/* Prevent LastPass from injecting content */}
        <div style={{ position: "relative" }}>
          <Input
            type="text"
            placeholder="Enter voice command"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
          />
        </div>
        <Button onClick={handleVoiceResponse} disabled={isLoading}>
          {isLoading ? "Generating..." : "Generate Voice Response"}
        </Button>
        {response && (
          <div>
            <h3>Response:</h3>
            <p>{response}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VoiceResponse;
