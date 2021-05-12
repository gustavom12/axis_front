export default function GetDate(date:number){
  const dd = new Date(date); // or any date and time you care about
  const dateArray =  dd.toISOString().split('T')[0].split('-').concat( dd.toISOString().split('T')[1].split(':') );
  return {
    day: dateArray[2],
    month: dateArray[1],
    year: dateArray[0],
    hour: dateArray[3],
    minutes: dateArray[4],
    seconds:dateArray[5].split('.')[0],
    milliseconds: dateArray[5].split('.')[1].replace('Z',''),
    complete: `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`
}
}
