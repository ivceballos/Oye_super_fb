"use client";

import { useState, useEffect } from "react";
import { getRankingData, SheetRow } from "@/services/sheets";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RankingVisualization = () => {
  const [rankingData, setRankingData] = useState<SheetRow[]>([]);

  useEffect(() => {
    const fetchRanking = async () => {
      const data = await getRankingData();
      setRankingData(data);
    };

    fetchRanking();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ranking Visualization</CardTitle>
        <CardDescription>Real-time ranking of players</CardDescription>
      </CardHeader>
      <CardContent className="overflow-auto">
        <Table>
          <TableCaption>A list of players and their current rankings.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Player</TableHead>
              <TableHead>Points</TableHead>
              <TableHead>Day</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rankingData.map((row) => (
              <TableRow key={row.player}>
                <TableCell className="font-medium">{row.date}</TableCell>
                <TableCell>{row.position}</TableCell>
                <TableCell>{row.player}</TableCell>
                <TableCell>{row.points}</TableCell>
                <TableCell>{row.day}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RankingVisualization;
