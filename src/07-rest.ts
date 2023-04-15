import {User, ROLES} from "./01-enum";

const currentUser :User ={
  username : 'Diego',
  role:ROLES.CUSTOMER
}

export const checkAdminRole = ()=>{
  if (currentUser.role === ROLES.ADMIN){
    return true;
  }
  return false;
}

const res = checkAdminRole();
console.log("checkAdminRole", res);


export const checkRole = (role1:string,role2:string)=>{
  if (currentUser.role === role1){
    return true;
  }
  if(currentUser.role === role2){
    return true;
  }
  return false;
}

const res2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log("checkRole",res2)

export const checkRoleV2 = (roles:string[])=>{
  if (roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

const res3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log("checkRoleV2",res3)

export const checkRoleV3 = (...roles:string[])=>{
  if (roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

const res4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER,ROLES.CUSTOMER);
console.log("checkRoleV3",res4)

