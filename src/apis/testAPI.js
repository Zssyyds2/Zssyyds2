import http from '@/utils/http'
//get方法访问接口
export function getCategoryAPI() {
    return http({
        url: 'home/category/head'
    })
}
