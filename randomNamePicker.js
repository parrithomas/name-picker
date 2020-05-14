let randomNumber = Math.floor(Math.random() * 13)

moviePicker = '';

switch (randomNumber){
    case 0:
    moviePicker = 'Steve';
    break;
    case 1:
    moviePicker = 'Lizz';
    break;
    case 2:
    moviePicker = 'Sandr';
    break;
    case 3:
    moviePicker = 'Sophie';
    break;        
    case 4:
    moviePicker = 'Jack';
    break;
    case 5:
    moviePicker = 'Andrew';
    break;    
    case 6:
    moviePicker = 'Silvia';
    break;
    case 7:
    moviePicker = 'Parri';
    break;
    case 8:
    moviePicker = 'Harriet';
    break;
    case 9:
    moviePicker = 'Marco';
    break;        
    case 10:
    moviePicker = 'Countess';
    break;
    case 11:
    moviePicker = 'Chantal';
    default:
    moviePicker = "Dom"
    break;
}
document.write(`This week ${moviePicker} chooses the movie!!`);