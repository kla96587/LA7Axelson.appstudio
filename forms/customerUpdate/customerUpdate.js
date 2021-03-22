//  Initialize variables
let query = ""
let req = {}
let netID = "kla96587"
let pw = "Chichi101!!!"
let results = []
 
//  Textaread shows customer names upon loading
customerUpdate.onshow=function(){
//  SELECT CODE Cleaned up
  query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query) 
 
  if (req.status == 200) { //transit trip worked. 
    results = JSON.parse(req.responseText)
    console.log(`The results are \n ${results}`)
    if (results.length == 0)
      lblMessage4.value = "There are no customers in the database."
    else {
      let message = ""
      for (i = 0; i < results.length; i++)
        message = message + results[i][1] + "\n"  
      txtaCustomers2.value = message
    } // end else
 
  } else // the transit didn't work - bad wifi? server turned off?
    lblMessage4.value = "Error code: " + req.status
}
 
btnUpdateCustomer.onclick=function(){
//  SELECT CODE Cleaned up
  let currentName = inptCurrentNameUpdate.value
  let newName = inptNewNameUpdate.value
  query = `UPDATE customer375 SET name = ${newName} WHERE name = ${currentName}`
  alert(query)
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
 
  if (req.status == 200) { //transit trip worked.
    lblUpdateConfirmation.value = `Customer ${currentName}'s name has been updated to ${newName}!`
 
  } else // the transit didn't work - bad wifi? server turned off?
    lblUpdateConfirmation.value = "Error code: " + req.status
}