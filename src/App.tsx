import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

function App() {
  const [hasFiyati, setHasFiyati] = useState<number>(0);
  const [faturaTutari, setFaturaTutari] = useState<number>(0);
  
  const [k22Sonuclar, setK22Sonuclar] = useState({
    gram: 0,
    fiyat: 0,
    iscilik: 0
  });
  
  const [k14Sonuclar, setK14Sonuclar] = useState({
    gram: 0,
    fiyat: 0,
    iscilik: 0
  });

  useEffect(() => {
    if (hasFiyati && faturaTutari) {
      // 22 Ayar Hesaplamaları
      const k22Gram = Math.round((faturaTutari * 0.9832) / (hasFiyati * 0.916) * 100) / 100;
      const k22Fiyat = Math.round(hasFiyati * 0.916 * 100) / 100;
      const k22Iscilik = Math.round((faturaTutari - (k22Fiyat * k22Gram)) * 100) / 100;

      // 14 Ayar Hesaplamaları
      const k14Gram = Math.round((faturaTutari * 0.928) / (hasFiyati * 0.585) * 100) / 100;
      const k14Fiyat = Math.round(hasFiyati * 0.585 * 100) / 100;
      const k14Iscilik = Math.round((faturaTutari - (k14Fiyat * k14Gram)) * 100) / 100;

      setK22Sonuclar({
        gram: k22Gram,
        fiyat: k22Fiyat,
        iscilik: k22Iscilik
      });

      setK14Sonuclar({
        gram: k14Gram,
        fiyat: k14Fiyat,
        iscilik: k14Iscilik
      });
    }
  }, [hasFiyati, faturaTutari]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-8 h-8 text-amber-600" />
            <h1 className="text-2xl font-bold text-gray-800">KARDEŞ SÜMER [POS]</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                HAS FİYATI
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={hasFiyati || ''}
                onChange={(e) => setHasFiyati(Number(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                FATURA TUTARI
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={faturaTutari || ''}
                onChange={(e) => setFaturaTutari(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 22 Ayar Sonuçları */}
            <div className="bg-amber-50 p-4 rounded-lg">
              <h2 className="text-xl font-bold text-amber-800 mb-4">22 AYAR</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">22 AYAR GRAMI:</span>
                  <span className="font-semibold">{k22Sonuclar.gram.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">22 AYAR FİYATI:</span>
                  <span className="font-semibold">{k22Sonuclar.fiyat.toFixed(2)} ₺</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">22K İŞÇİLİK:</span>
                  <span className="font-semibold">{k22Sonuclar.iscilik.toFixed(2)} ₺</span>
                </div>
              </div>
            </div>

            {/* 14 Ayar Sonuçları */}
            <div className="bg-amber-50 p-4 rounded-lg">
              <h2 className="text-xl font-bold text-amber-800 mb-4">14 AYAR</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">14 AYAR GRAMI:</span>
                  <span className="font-semibold">{k14Sonuclar.gram.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">14 AYAR FİYATI:</span>
                  <span className="font-semibold">{k14Sonuclar.fiyat.toFixed(2)} ₺</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">14K İŞÇİLİK:</span>
                  <span className="font-semibold">{k14Sonuclar.iscilik.toFixed(2)} ₺</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;