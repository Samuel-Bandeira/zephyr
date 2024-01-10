"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewChart from "../temperature-chart";
import HumidityChart from "../humidity-chart";
import WeightChart from "../weight-chart";
import CarbonDioxideChart from "../carbon-dioxide-chart";
import { DataTable } from "../data-table";

export default function HiveDashboard() {
  return (
    <div className="p-4">
      <Tabs defaultValue="monitoring" className="space-y-4">
        <TabsList>
          <TabsTrigger value="monitoring">Monitoramento</TabsTrigger>
          <TabsTrigger value="traceability">Rastreabilidade</TabsTrigger>
          <TabsTrigger value="management" disabled>
            Manejo
          </TabsTrigger>
        </TabsList>
        <TabsContent value="traceability" className="space-y-4">
          <div className="grid gap-4">
            <DataTable />
          </div>
        </TabsContent>
        <TabsContent value="monitoring" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Temperatura
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">40 °C</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Umidade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">100%</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Peso</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">40 Kg</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Gás Carbônico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">100</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            <Card className="col-span-6">
              <CardHeader>
                <CardTitle>Temperatura</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <OverviewChart />
              </CardContent>
            </Card>
            <Card className="col-span-6">
              <CardHeader>
                <CardTitle>Umidade</CardTitle>
              </CardHeader>
              <CardContent>
                <HumidityChart />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            <Card className="col-span-6">
              <CardHeader>
                <CardTitle>Peso</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <WeightChart />
              </CardContent>
            </Card>
            <Card className="col-span-6">
              <CardHeader>
                <CardTitle>Gás Carbônico</CardTitle>
              </CardHeader>
              <CardContent>
                <CarbonDioxideChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
