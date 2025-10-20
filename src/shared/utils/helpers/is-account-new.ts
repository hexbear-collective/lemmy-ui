import { isAfter, addDays, parse} from "date-fns"

export function sproutDate(published:string): Date {
    return parse(published.substring(0,10), 'yyyy-MM-dd',new Date(0));
}

export default function isAccountNew(published: string): boolean {
    const createDate = sproutDate(published);
    const currentDate = new Date();    
    
    return isAfter(addDays(createDate,30),currentDate);
}

