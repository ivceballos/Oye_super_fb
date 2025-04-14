"use client";

import { useState } from "react";
import { processNomination } from "@/ai/flows/nomination-processing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const NominationProcessing = () => {
  const [audioUrl, setAudioUrl] = useState("");
  const [playerId, setPlayerId] = useState("");
  const [nominations, setNominations] = useState<any>(null); // Replace 'any' with the correct type
  const [isLoading, setIsLoading] = useState(false);

  const handleNominationProcessing = async () => {
    setIsLoading(true);
    try {
      const result = await processNomination({ audioUrl, playerId });
      setNominations(result);
    } catch (error) {
      console.error("Error processing nomination:", error);
      setNominations(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nomination Recording &amp; Processing</CardTitle>
        <CardDescription>AI-powered tool to record, transcribe, and extract nominations</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <Input
            type="text"
            placeholder="Audio URL"
            value={audioUrl}
            onChange={(e) => setAudioUrl(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Player ID"
            value={playerId}
            onChange={(e) => setPlayerId(e.target.value)}
          />
        </div>
        <Button onClick={handleNominationProcessing} disabled={isLoading}>
          {isLoading ? "Processing..." : "Process Nomination"}
        </Button>

        {nominations && (
          <div>
            <h3>Nominations:</h3>
            <pre>{JSON.stringify(nominations, null, 2)}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NominationProcessing;
