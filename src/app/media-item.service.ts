
export class MediaItemService {

  
    get(){
    
      return this.mediaitems;
    }
    add(mediaItem){
    
    this.mediaitems.push(mediaItem);
    
    }
    delete(mediaItem){
    
    let index=this.mediaitems.indexOf(mediaItem)
      
      if(index >=0){
        this.mediaitems.splice(index,1);
    
        }
    }
    
      mediaitems = [
        {
          id: 1,
          name: "Thor",
          medium: "Movie",
          category: "Action",
          year: 2016,
          watchedOn: 1252016,
          isFavorite: false
        },
        {
          id: 2,
          name: "The Small Tall",
          medium: "Movies",
          category: "Comedy",
          year: 2015,
          watchedOn: null,
          isFavorite: true
        }, {
          id: 3,
          name: "The Redemption",
          medium: "Movies",
          category: "Action",
          year: 2016,
          watchedOn: null,
          isFavorite: false
        }, {
          id: 4,
          name: "Grave of the Fireflies",
          medium: "Movies",
          category: "Drama",
          year: null,
          watchedOn: null,
          isFavorite: true
        }, {
          id: 5,
          name: "Happy Joe: Cheery Road",
          medium: "Movies",
          category: "Action",
          year: 2015,
          watchedOn: 25112015,
          isFavorite: false
        }
      ];
    
     
    
    }
    
    
    
    
    