

function currentDate(){
const currentDate = new Date();
const dateString = currentDate.tolocaleDateString();
    return(
        <div> 
            <p> Today: {dateString}</p>
            <currentDate />
            <dateString />
        </div>
    );
}
export default currentDate