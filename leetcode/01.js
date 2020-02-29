function CheckCharacter() {
  function getStr(sb) {
    if (sb === null || sb.length() <= 2) {
      return sb.toString();
    }
    for (let i = 2; i < sb.length(); i++) {
      //如果前3个相同
      while (
        i < sb.length() &&
        sb.charAt(i) == sb.charAt(i - 1) &&
        sb.charAt(i) == sb.charAt(i - 2)
      ) {
        //三个相同的字符
        console.log(i + "-" + sb.toString());
        sb.deleteCharAt(i);
        console.log(i + "-" + sb.toString());
      }
      while (
        sb.length() >= 4 &&
        i >= 3 &&
        i < sb.length() &&
        sb.charAt(i) == sb.charAt(i - 1) &&
        sb.charAt(i - 3) == sb.charAt(i - 2)
      ) {
        //检测是否为AABB
        //if(){ //三个相同的字符
        sb.deleteCharAt(i); //    }
      }
    }
    return sb.toString();
  }

  function main(args) {
    let originStr = "heloAABBCCo";
    originStr = "heACCCCCC";
    let result = getStr(new StringBuilder(originStr));
    console.log(result);
  }
}
