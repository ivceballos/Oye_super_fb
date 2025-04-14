"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Home as DashboardIcon } from "lucide-react";
import SuperControlPanel from "@/components/SuperControlPanel";
import RankingVisualization from "@/components/RankingVisualization";
import VoiceResponse from "@/components/VoiceResponse";
import NominationProcessing from "@/components/NominationProcessing";

export default function Home() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2>El Súper Simulator</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="#" isActive>
                <DashboardIcon className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#control-panel">
                <DashboardIcon className="mr-2 h-4 w-4" />
                <span>Control Panel</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="#ranking">
                  <DashboardIcon className="mr-2 h-4 w-4" />
                  <span>Ranking</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="#voice">
                  <DashboardIcon className="mr-2 h-4 w-4" />
                  <span>Voice Response</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#nomination">
                <DashboardIcon className="mr-2 h-4 w-4" />
                <span>Nomination</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <main className="flex-1 p-4">
        <section id="control-panel">
          <SuperControlPanel />
        </section>
        <section id="ranking">
          <RankingVisualization />
        </section>
        <section id="voice">
          <VoiceResponse />
        </section>
        <section id="nomination">
          <NominationProcessing />
        </section>
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
