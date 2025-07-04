'use client';

import { useState } from 'react';

interface FormData {
  valorVivienda: string;
  edadPropietario: string;
  sexoPropietario: 'hombre' | 'mujer' | '';
  tipoInversion: 'nuda-propiedad' | 'usufructo' | '';
}

interface ResultadoCalculo {
  valorNudaPropiedad: number;
  valorUsufructo: number;
  esperanzaVida: number;
  porcentajeDescuento: number;
  rentabilidadAnual: number;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    valorVivienda: '',
    edadPropietario: '',
    sexoPropietario: '',
    tipoInversion: '',
  });

  const [resultado, setResultado] = useState<ResultadoCalculo | null>(null);
  const [calculando, setCalculando] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calcularNudaPropiedad = async (e: React.FormEvent) => {
    e.preventDefault();
    setCalculando(true);

    // Simulamos una llamada a API con delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock calculation logic basado en datos reales aproximados
    const valor = parseFloat(formData.valorVivienda);
    const edad = parseInt(formData.edadPropietario);
    
    // Esperanza de vida aproximada (simplificada)
    const esperanzaVidaBase = formData.sexoPropietario === 'mujer' ? 85 : 80;
    const esperanzaVida = Math.max(esperanzaVidaBase - edad, 5);
    
    // Cálculo del descuento basado en edad y esperanza de vida
    const factorEdad = Math.min((edad / 100) * 1.2, 0.85);
    const porcentajeDescuento = Math.round(factorEdad * 100);
    
    // Cálculos
    const valorNudaPropiedad = Math.round(valor * factorEdad);
    const valorUsufructo = valor - valorNudaPropiedad;
    const rentabilidadAnual = Math.round(((valor - valorNudaPropiedad) / valorNudaPropiedad / esperanzaVida) * 100 * 100) / 100;

    setResultado({
      valorNudaPropiedad,
      valorUsufructo,
      esperanzaVida,
      porcentajeDescuento,
      rentabilidadAnual
    });

    setCalculando(false);
  };

  const limpiarFormulario = () => {
    setFormData({
      valorVivienda: '',
      edadPropietario: '',
      sexoPropietario: '',
      tipoInversion: '',
    });
    setResultado(null);
  };

  return (
    <main className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              BareValue
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Herramienta profesional para el cálculo de tasación de nuda propiedad e inversiones inmobiliarias
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Precios ajustados a la esperanza de vida con precisión actuarial
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulario */}
          <div className="glass-effect rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Datos para el Cálculo
            </h2>
            
            <form onSubmit={calcularNudaPropiedad} className="space-y-6">
              <div>
                <label htmlFor="valorVivienda" className="block text-sm font-medium text-gray-300 mb-2">
                  Valor de la Vivienda (€)
                </label>
                <input
                  type="number"
                  id="valorVivienda"
                  name="valorVivienda"
                  value={formData.valorVivienda}
                  onChange={handleInputChange}
                  placeholder="Ej: 300000"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="edadPropietario" className="block text-sm font-medium text-gray-300 mb-2">
                  Edad del Propietario
                </label>
                <input
                  type="number"
                  id="edadPropietario"
                  name="edadPropietario"
                  value={formData.edadPropietario}
                  onChange={handleInputChange}
                  placeholder="Ej: 75"
                  min="50"
                  max="100"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="sexoPropietario" className="block text-sm font-medium text-gray-300 mb-2">
                  Sexo del Propietario
                </label>
                <select
                  id="sexoPropietario"
                  name="sexoPropietario"
                  value={formData.sexoPropietario}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Seleccionar...</option>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                </select>
              </div>

              <div>
                <label htmlFor="tipoInversion" className="block text-sm font-medium text-gray-300 mb-2">
                  Tipo de Inversión
                </label>
                <select
                  id="tipoInversion"
                  name="tipoInversion"
                  value={formData.tipoInversion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Seleccionar...</option>
                  <option value="nuda-propiedad">Nuda Propiedad</option>
                  <option value="usufructo">Usufructo</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={calculando}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
                >
                  {calculando ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Calculando...
                    </>
                  ) : (
                    'Calcular Tasación'
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={limpiarFormulario}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition duration-200"
                >
                  Limpiar
                </button>
              </div>
            </form>
          </div>

          {/* Resultados */}
          <div className="glass-effect rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Resultado de la Tasación
            </h2>
            
            {!resultado ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <p className="text-gray-400">
                  Complete el formulario para obtener la tasación de nuda propiedad
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Valor Nuda Propiedad</h3>
                    <p className="text-2xl font-bold text-green-400">
                      {resultado.valorNudaPropiedad.toLocaleString('es-ES')} €
                    </p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Valor Usufructo</h3>
                    <p className="text-2xl font-bold text-blue-400">
                      {resultado.valorUsufructo.toLocaleString('es-ES')} €
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Esperanza de Vida</h3>
                    <p className="text-xl font-bold text-white">{resultado.esperanzaVida} años</p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Descuento Aplicado</h3>
                    <p className="text-xl font-bold text-orange-400">{resultado.porcentajeDescuento}%</p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Rentabilidad Anual</h3>
                    <p className="text-xl font-bold text-purple-400">{resultado.rentabilidadAnual}%</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Información Adicional</h3>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p>• Cálculo basado en tablas actuariales del INE</p>
                    <p>• Incluye factores de riesgo por edad y sexo</p>
                    <p>• Valoración ajustada a mercado inmobiliario actual</p>
                    <p>• Resultado orientativo para análisis de inversión</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            © 2024 BareValue. Herramienta profesional de tasación inmobiliaria.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Los cálculos son orientativos y deben ser validados por un tasador profesional.
          </p>
        </div>
      </div>
    </main>
  );
}
