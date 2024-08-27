import http from '@/utils/http'

export function getBannerApi() {
    return http({
        url: 'home/banner'
    })
}

export function findNewAPI() {
    return http({
        url: '/home/new'
    })
}
export function findHotAPI() {
    return http({
        url: '/home/hot'
    })
}