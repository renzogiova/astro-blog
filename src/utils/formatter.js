const dateFormatter = (date) => {
    console.log(date);
    const formattedDate = new Date(date).toLocaleDateString()
    return formattedDate;
}

export default dateFormatter;