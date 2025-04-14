"use client";

import { useState, useEffect } from "react";
import { getAudioClips, AudioClip } from "@/services/audio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SuperControlPanel = () => {
  const [audioClips, setAudioClips] = useState<AudioClip[]>([]);
  const [selectedAudio, setSelectedAudio] = useState<string | null>(null);

  useEffect(() => {
    const fetchAudio = async () => {
      const clips = await getAudioClips();
      setAudioClips(clips);
    };

    fetchAudio();
  }, []);

  const playAudio = (url: string) => {
    setSelectedAudio(url);
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Panel de Control del Súper</CardTitle>
        <CardDescription>Activar manualmente la reproducción de audio</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Reproducción de Audio</h3>
          <div className="grid gap-2">
            {audioClips.map((clip) => (
              <Button key={clip.url} onClick={() => playAudio(clip.url)}>
                {clip.name}
              </Button>
            ))}
          </div>
        </div>
        {selectedAudio && (
          <div>
            <p>Reproduciendo: {selectedAudio}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SuperControlPanel;
