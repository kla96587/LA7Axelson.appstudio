/*
let query = ""
let req = {}
let netID = "kla96587"
let pw = "Chichi101!!!"
let results = []

customerDelete.onshow=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are \n ${results}`)
        if (results.length == 0)
            lblMessage2.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + "\n"
            txtaDisplayCustomerNames.value = message
        } // end else

    } else // the transit didn't work - bad wifi? server turned off?
        lblMessage2.value = "Error code: " + req.status
  
}

btnDeleteCustomer.onclick=function(){
    query = `DELETE * FROM customer WHERE name = ${inptCustomerDelete.value}`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        
        lblDeleteConfirmation.value = `Customer ${inptCustomerDelete.value} has been deleted`

    } else // the transit didn't work - bad wifi? server turned off?
        lblDeleteConfirmation.value = "Error code: " + req.status
}
*/