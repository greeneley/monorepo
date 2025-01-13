<script setup>
import GoldService from '@/services/GoldService.js';
import { onMounted, ref } from 'vue';
import { TrendingUpIcon, TrendingDownIcon, MinusIcon } from 'lucide-vue-next';
const goldPrices = ref([]);
const loading = ref(true);
const retrieveGoldPrice = async () => {
  try {
    loading.value = false;
    const { data } = await GoldService.getGoldPrice('common');
    goldPrices.value = data
      .map((item) => {
        const {
          id,
          type,
          label,
          buyPrice,
          sellPrice,
          buyDifference,
          sellDifference,
          currentDifference
        } = item;
        if (type === 'thegioi') return;
        return {
          id,
          type,
          label,
          buyPrice,
          sellPrice,
          buyDifference,
          sellDifference,
          difference: currentDifference,
          trend: item.buyDifference > 0 ? 'up' : item.buyDifference < 0 ? 'down' : 'no_change'
        };
      })
      .filter(Boolean);
  } catch (error) {
    console.error('Error fetching gold prices:', error);
    loading.value = false;
  }
};
onMounted(() => {
  retrieveGoldPrice();
});
const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price);
};

const formatDifference = (difference) => {
  if (parseInt(difference) === 0) return 0;
  const formatted = new Intl.NumberFormat('vi-VN').format(Math.abs(difference));
  return difference > 0 ? `+${formatted}` : `-${formatted}`;
};
</script>

<template>
  <div class="mx-auto">
    <!-- Gold Price Table -->
    <!--    <div v-if="loading" class="text-center py-8">-->
    <!--      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>-->
    <!--      <p class="mt-2 text-gray-600">Đang tải dữ liệu...</p>-->
    <!--    </div>-->
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
                {{ item.label }}
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
                  :class="['inline-flex items-center px-2 py-0.5 rounded-full text-md font-medium']"
                >
                  {{ formatPrice(item.difference) }}
                </span>
              </td>
              <td class="px-4 sm:px-6 py-4">
                <div class="flex justify-center">
                  <div
                    :class="[
                      'flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs font-medium',
                      item.trend === 'up'
                        ? 'bg-green-100 text-green-800'
                        : item.trend === 'down'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-100 text-gray-800'
                    ]"
                  >
                    <TrendingUpIcon v-if="item.trend === 'up'" class="w-3 h-3 sm:w-4 sm:h-4" />
                    <TrendingDownIcon v-if="item.trend === 'down'" class="w-3 h-3 sm:w-4 sm:h-4" />
                    <MinusIcon v-if="item.trend === 'no_change'" class="w-3 h-3 sm:w-4 sm:h-4" />
                    <span class="hidden sm:inline">
                      {{
                        item.trend === 'up' ? 'Tăng' : item.trend === 'down' ? 'Giảm' : 'Không đổi'
                      }}
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
