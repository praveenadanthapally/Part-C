function counter()
{
  let count=0;
  return function()
  {
    count++'
    return count;
  }
}
const c = counter();
c(); // 1
c(); // 2
c(); // 3
