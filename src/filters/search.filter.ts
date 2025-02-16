export class SearchFilter{
  constructor(){}

  transform<T>(arr: T[], searchIn: keyof T, searchText: string): T[] {
    if (!arr || !searchIn || !searchText) return arr;
    return arr.filter((el) => 
      String(el[searchIn]).toLowerCase().indexOf(searchText.toLowerCase()) > -1
    );
  }
}
