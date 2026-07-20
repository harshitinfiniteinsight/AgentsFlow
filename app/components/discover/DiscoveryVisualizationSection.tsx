'use client';

import { ArrowDown } from 'lucide-react';
import { visualizationLayers } from './data';

export default function DiscoveryVisualizationSection() {
  return (
    <section className="bg-[#0b1222] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Complete Visibility Across Your AI Ecosystem
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* Vertical diagram */}
          <div className="space-y-2">
            {visualizationLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <div key={index}>
                  <div
                    className={`relative rounded-xl border p-4 transition-all duration-300 ${
                      index === visualizationLayers.length - 1
                        ? 'border-cyan-500/40 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 ring-2 ring-cyan-500/20'
                        : 'border-white/10 bg-white/5 hover:border-cyan-500/30 hover:bg-white/10'
                    } backdrop-blur-sm`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 rounded-lg p-3 ${
                          index === visualizationLayers.length - 1
                            ? 'bg-cyan-500/20 text-cyan-300'
                            : 'bg-slate-500/10 text-slate-400'
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{layer.title}</h3>
                        <p className="mt-1 text-sm text-slate-400">{layer.description}</p>
                      </div>
                    </div>
                  </div>

                  {index < visualizationLayers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="h-5 w-5 text-slate-600 animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Supporting text */}
          <p className="mt-6 text-center text-base text-slate-400">
            Maintain a continuously updated inventory of every AI capability across your enterprise.
          </p>
        </div>
      </div>
    </section>
  );
}
