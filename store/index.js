import { defineStore } from 'pinia'
export const useUserStore = defineStore('UserStore', {
    
    state: () => ({
      id: 1,
      userList: [],
      loggedInUserId: null,
      logInError: false
    }),
    actions: {
      addUserData(userData) {
        this.userList.push({...userData,id:this.id++}) // 注意这里使用了 push 方法，因此 userList 应该是数组类型
      },
      matchUser(account,password,router) {
        const ismatched = this.userList.find((obj) => obj.account == account && obj.password == password)
        if (ismatched) {
          console.log(ismatched.id)
          this.loggedInUserId = ismatched.id  // 将匹配到的 id 存储到 loggedInUserId 中
          router.push('/sign_up/login')
          $(".modal-backdrop").remove();
        }else{
          this.logInError = true
        }
      }
    },
  })