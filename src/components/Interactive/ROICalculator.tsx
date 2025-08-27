'use client';

import React, { useState } from 'react';

interface ROICalculatorProps {
  type: 'automation' | 'integration' | 'mvp' | 'scalability';
}

interface CalculatorInputs {
  currentCost: number;
  timeSpent: number;
  errorRate: number;
  teamSize: number;
}

interface ROIResults {
  monthlySavings: number;
  annualSavings: number;
  roi: number;
  paybackPeriod: number;
  efficiencyGain: number;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({ type }) => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    currentCost: 10000,
    timeSpent: 160,
    errorRate: 15,
    teamSize: 5
  });

  const [results, setResults] = useState<ROIResults | null>(null);

  const calculateROI = () => {
    let investment = 50000; // Investimento base
    let efficiency = 0;
    let costReduction = 0;

    switch (type) {
      case 'automation':
        investment = 35000;
        efficiency = 0.75; // 75% de eficiência
        costReduction = inputs.timeSpent * 50 * 0.8; // 80% redução tempo
        break;
      case 'integration':
        investment = 40000;
        efficiency = 0.70;
        costReduction = inputs.timeSpent * 50 * 0.75;
        break;
      case 'mvp':
        investment = 45000;
        efficiency = 0.80;
        costReduction = inputs.currentCost * 0.60; // 60% economia vs desenvolvimento tradicional
        break;
      case 'scalability':
        investment = 60000;
        efficiency = 0.85;
        costReduction = inputs.currentCost * 0.40; // 40% redução custos infraestrutura
        break;
    }

    const monthlySavings = costReduction + (inputs.errorRate / 100 * inputs.currentCost * efficiency);
    const annualSavings = monthlySavings * 12;
    const roi = ((annualSavings - investment) / investment) * 100;
    const paybackPeriod = investment / monthlySavings;
    const efficiencyGain = efficiency * 100;

    setResults({
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      efficiencyGain: Math.round(efficiencyGain)
    });
  };

  const getTitle = () => {
    switch (type) {
      case 'automation': return 'Calculadora ROI - Automação de Processos';
      case 'integration': return 'Calculadora ROI - Integração de Sistemas';
      case 'mvp': return 'Calculadora ROI - Desenvolvimento MVP';
      case 'scalability': return 'Calculadora ROI - Escalabilidade';
    }
  };

  const getDescription = () => {
    switch (type) {
      case 'automation': return 'Calcule o retorno do investimento em automação de processos empresariais';
      case 'integration': return 'Descubra quanto sua empresa pode economizar integrando sistemas';
      case 'mvp': return 'Compare os custos de MVP vs desenvolvimento tradicional';
      case 'scalability': return 'Analise o ROI de tornar sua aplicação escalável';
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{getTitle()}</h3>
        <p className="text-gray-600">{getDescription()}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-gray-900">Dados Atuais da Empresa</h4>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Custo Mensal Atual (R$)
            </label>
            <input
              type="number"
              value={inputs.currentCost}
              onChange={(e) => setInputs({...inputs, currentCost: Number(e.target.value)})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="10.000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Horas/Mês em Processos Manuais
            </label>
            <input
              type="number"
              value={inputs.timeSpent}
              onChange={(e) => setInputs({...inputs, timeSpent: Number(e.target.value)})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="160"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Taxa de Erro Atual (%)
            </label>
            <input
              type="number"
              value={inputs.errorRate}
              onChange={(e) => setInputs({...inputs, errorRate: Number(e.target.value)})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="15"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tamanho da Equipe
            </label>
            <input
              type="number"
              value={inputs.teamSize}
              onChange={(e) => setInputs({...inputs, teamSize: Number(e.target.value)})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="5"
            />
          </div>

          <button
            onClick={calculateROI}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            Calcular ROI
          </button>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-gray-900">Resultados Projetados</h4>
          
          {results ? (
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    R$ {results.monthlySavings.toLocaleString()}
                  </div>
                  <div className="text-gray-600">Economia Mensal</div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    R$ {results.annualSavings.toLocaleString()}
                  </div>
                  <div className="text-gray-600">Economia Anual</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
                  <div className="text-xl font-bold text-purple-600">{results.roi}%</div>
                  <div className="text-sm text-gray-600">ROI Anual</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 text-center">
                  <div className="text-xl font-bold text-orange-600">{results.paybackPeriod}</div>
                  <div className="text-sm text-gray-600">Meses Payback</div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-800">{results.efficiencyGain}%</div>
                  <div className="text-sm text-gray-600">Ganho de Eficiência</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  <div className="text-sm">
                    <div className="font-medium text-yellow-800">Projeção Estimada</div>
                    <div className="text-yellow-700">
                      Resultados baseados em métricas da indústria e podem variar conforme implementação específica.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
              <p>Preencha os dados acima e clique em "Calcular ROI" para ver os resultados</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};