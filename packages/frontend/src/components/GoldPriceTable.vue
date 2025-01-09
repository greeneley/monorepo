<script setup>
import GoldService from '@/services/GoldService.js';
import { ref } from 'vue';
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-vue-next';

const goldPrices = ref([
  {
    type: 'AVPL/SJC HCM',
    buyPrice: 84500000,
    sellPrice: 86000000,
    buyDifference: 500000,
    sellDifference: 600000,
    difference: 1500000,
    trend: 'up'
  },
  {
    type: 'AVPL/SJC HN',
    buyPrice: 84500000,
    sellPrice: 86000000,
    buyDifference: 500000,
    sellDifference: 600000,
    difference: 1500000,
    trend: 'up'
  },
  {
    type: 'Hà Nội PNJ',
    buyPrice: 84800000,
    sellPrice: 86000000,
    buyDifference: -200000,
    sellDifference: -100000,
    difference: 1200000,
    trend: 'down'
  },
  {
    type: 'Vàng nhẫn SJC 99.99',
    buyPrice: 84500000,
    sellPrice: 85900000,
    buyDifference: 400000,
    sellDifference: 500000,
    difference: 1400000,
    trend: 'up'
  },
  {
    type: 'Giá vàng thế giới',
    buyPrice: 2664000,
    sellPrice: 2665000,
    buyDifference: -1000,
    sellDifference: -2000,
    difference: 1000,
    trend: 'down'
  }
]);

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price);
};

const formatDifference = (difference) => {
  const formatted = new Intl.NumberFormat('vi-VN').format(Math.abs(difference));
  return formatted > 0 ? `+${formatted}` : `-${formatted}`;
};
</script>

<template>
  <div class="mx-auto">
    <!-- Gold Price Table -->
    <div class="bg-white rounded-md shadow-lg overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-200">
            <tr>
              <th
                class="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-900"
              >
                Loại vàng
              </th>
              <th
                class="px-4 sm:px-6 py-3 text-right text-xs sm:text-sm font-semibold text-gray-900"
              >
                Mua vào
              </th>
              <th
                class="px-4 sm:px-6 py-3 text-right text-xs sm:text-sm font-semibold text-gray-900"
              >
                Bán ra
              </th>
              <th
                class="px-4 sm:px-6 py-3 text-center text-xs sm:text-sm font-semibold text-gray-900 hidden sm:table-cell"
              >
                Chênh lệch
              </th>
              <th
                class="px-4 sm:px-6 py-3 text-center text-xs sm:text-sm font-semibold text-gray-900"
              >
                Xu hướng
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr
              v-for="item in goldPrices"
              :key="item.type"
              class="hover:bg-gray-50 transition-colors duration-150"
            >
              <td class="px-4 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-900">
                {{ item.type }}
              </td>
              <td class="px-4 sm:px-6 py-4 text-right">
                <div class="flex flex-col items-end">
                  <span class="text-xs sm:text-sm font-semibold text-gray-900">{{
                    formatPrice(item.buyPrice)
                  }}</span>
                  <span
                    :class="[
                      'text-xs font-medium',
                      item.buyDifference > 0 ? 'text-green-600' : 'text-red-600'
                    ]"
                  >
                    {{ formatDifference(item.buyDifference) }}
                  </span>
                </div>
              </td>
              <td class="px-4 sm:px-6 py-4 text-right">
                <div class="flex flex-col items-end">
                  <span class="text-xs sm:text-sm font-semibold text-gray-900">{{
                    formatPrice(item.sellPrice)
                  }}</span>
                  <span
                    :class="[
                      'text-xs font-medium',
                      item.sellDifference > 0 ? 'text-green-600' : 'text-red-600'
                    ]"
                  >
                    {{ formatDifference(item.sellDifference) }}
                  </span>
                </div>
              </td>
              <td class="px-4 sm:px-6 py-4 text-center hidden sm:table-cell">
                <span
                  :class="[
                    'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium',
                    item.difference > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  ]"
                >
                  {{ formatDifference(item.difference) }}
                </span>
              </td>
              <td class="px-4 sm:px-6 py-4">
                <div class="flex justify-center">
                  <div
                    :class="[
                      'flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs font-medium',
                      item.trend === 'up'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    ]"
                  >
                    <TrendingUpIcon v-if="item.trend === 'up'" class="w-3 h-3 sm:w-4 sm:h-4" />
                    <TrendingDownIcon v-else class="w-3 h-3 sm:w-4 sm:h-4" />
                    <span class="hidden sm:inline">
                      {{ item.trend === 'up' ? 'Tăng' : 'Giảm' }}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
