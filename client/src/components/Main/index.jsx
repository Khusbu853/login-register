import { Table, Pagination } from 'react-bootstrap';
import styles from "./styles.module.css";
import { useState } from 'react';



const Main = () => {

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const tableData = [
		{ S_No: '1', Name: 'Row 1 Data 2', Date_Created: 'Row 1 Data 3', Role: 'Row 1 Data 4', Status: 'Row 1 Data 5', Action: 'Row 1 Data 6' },
		{ S_No: '2', Name: 'Row 2 Data 2', Date_Created: 'Row 2 Data 3', Role: 'Row 2 Data 4', Status: 'Row 2 Data 5', Action: 'Row 2 Data 6' },
		{ S_No: '3', Name: 'Row 3 Data 2', Date_Created: 'Row 3 Data 3', Role: 'Row 3 Data 4', Status: 'Row 3 Data 5', Action: 'Row 3 Data 6' },
		{ S_No: '4', Name: 'Row 4 Data 2', Date_Created: 'Row 4 Data 3', Role: 'Row 4 Data 4', Status: 'Row 4 Data 5', Action: 'Row 4 Data 6' },
		{ S_No: '5', Name: 'Row 5 Data 2', Date_Created: 'Row 5 Data 3', Role: 'Row 5 Data 4', Status: 'Row 5 Data 5', Action: 'Row 5 Data 6' },
		{ S_No: '6', Name: 'Row 6 Data 2', Date_Created: 'Row 6 Data 3', Role: 'Row 6 Data 4', Status: 'Row 6 Data 5', Action: 'Row 6 Data 6' },
		{ S_No: '7', Name: 'Row 1 Data 2', Date_Created: 'Row 1 Data 3', Role: 'Row 1 Data 4', Status: 'Row 1 Data 5', Action: 'Row 1 Data 6' },
		{ S_No: '8', Name: 'Row 2 Data 2', Date_Created: 'Row 2 Data 3', Role: 'Row 2 Data 4', Status: 'Row 2 Data 5', Action: 'Row 2 Data 6' },
		{ S_No: '9', Name: 'Row 3 Data 2', Date_Created: 'Row 3 Data 3', Role: 'Row 3 Data 4', Status: 'Row 3 Data 5', Action: 'Row 3 Data 6' },
		{ S_No: '10', Name: 'Row 4 Data 2', Date_Created: 'Row 4 Data 3', Role: 'Row 4 Data 4', Status: 'Row 4 Data 5', Action: 'Row 4 Data 6' },
		{ S_No: '11', Name: 'Row 5 Data 2', Date_Created: 'Row 5 Data 3', Role: 'Row 5 Data 4', Status: 'Row 5 Data 5', Action: 'Row 5 Data 6' },
		{ S_No: '12', Name: 'Row 6 Data 2', Date_Created: 'Row 6 Data 3', Role: 'Row 6 Data 4', Status: 'Row 6 Data 5', Action: 'Row 6 Data 6' },
		{ S_No: '13', Name: 'Row 1 Data 2', Date_Created: 'Row 1 Data 3', Role: 'Row 1 Data 4', Status: 'Row 1 Data 5', Action: 'Row 1 Data 6' },
		{ S_No: '14', Name: 'Row 2 Data 2', Date_Created: 'Row 2 Data 3', Role: 'Row 2 Data 4', Status: 'Row 2 Data 5', Action: 'Row 2 Data 6' },
		{ S_No: '15', Name: 'Row 3 Data 2', Date_Created: 'Row 3 Data 3', Role: 'Row 3 Data 4', Status: 'Row 3 Data 5', Action: 'Row 3 Data 6' },
		{ S_No: '16', Name: 'Row 4 Data 2', Date_Created: 'Row 4 Data 3', Role: 'Row 4 Data 4', Status: 'Row 4 Data 5', Action: 'Row 4 Data 6' },
		{ S_No: '17', Name: 'Row 5 Data 2', Date_Created: 'Row 5 Data 3', Role: 'Row 5 Data 4', Status: 'Row 5 Data 5', Action: 'Row 5 Data 6' },
		{ S_No: '18', Name: 'Row 6 Data 2', Date_Created: 'Row 6 Data 3', Role: 'Row 6 Data 4', Status: 'Row 6 Data 5', Action: 'Row 6 Data 6' }
	  ];
  
	// Define the number of items to display per page
	const itemsPerPage = 4;
  
	// Use state to manage the current page
	const [currentPage, setCurrentPage] = useState(1);
  
	// Calculate the index range to display based on the current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
  
	// Create a slice of the table data to display on the current page
	const visibleTableData = tableData.slice(startIndex, endIndex);
  
	// Function to handle page change
	const handlePageChange = (page) => {
	  setCurrentPage(page);
	};
  
	return (
	//   <div className={styles.main_container}>
	// 	<nav className={styles.navbar}>
    //      <h1>fakebook</h1>
    //      <button className={styles.white_btn} onClick={handleLogout}>
    //       Logout
    //     </button>
    //   </nav>
		
	// 	<Table striped bordered hover>
	// 	  <thead>
	// 		<tr>
	// 		  <th>Column 1</th>
	// 		  <th>Column 2</th>
	// 		  <th>Column 3</th>
	// 		  <th>Column 4</th>
	// 		  <th>Column 5</th>
	// 		  <th>Column 6</th>
	// 		</tr>
	// 	  </thead>
	// 	  <tbody>
	// 		{visibleTableData.map((item, index) => (
	// 		  <tr key={index}>
	// 			<td>{item.S_No}</td>
	// 			<td>{item.Name}</td>
	// 			<td>{item.Date_Created}</td>
	// 			<td>{item.Role}</td>
	// 			<td>{item.Status}</td>
	// 			<td>{item.Action}</td>
	// 		  </tr>
	// 		))}
	// 	  </tbody>
	// 	</Table>
  
	// 	<Pagination>
	// 	  <Pagination.Prev
	// 		onClick={() => handlePageChange(currentPage - 1)}
	// 		disabled={currentPage === 1}
	// 	  />
	// 	  {Array.from({ length: Math.ceil(tableData.length / itemsPerPage) }).map((_, index) => (
	// 		<Pagination.Item
	// 		  key={index}
	// 		  active={currentPage === index + 1}
	// 		  onClick={() => handlePageChange(index + 1)}
	// 		>
	// 		  {index + 1}
	// 		</Pagination.Item>
	// 	  ))}
	// 	  <Pagination.Next
	// 		onClick={() => handlePageChange(currentPage + 1)}
	// 		disabled={currentPage === Math.ceil(tableData.length / itemsPerPage)}
	// 	  />
	// 	</Pagination>
	//   </div>
	<div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>LOGO</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <Table striped bordered hover responsive style={{margin: 'auto'}}>
        <thead >
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
		  

        </thead>
		
        <tbody>
          {visibleTableData.map((item, index) => (
            <tr key={index} style={{marginBottom: '20px'}}>
              <td>{item.S_No}</td>
              <td>{item.Name}</td>
              <td>{item.Date_Created}</td>
              <td>{item.Role}</td>
              <td>{item.Status}</td>
              <td>{item.Action}</td>
            </tr>
			
			
			
          ))}
        </tbody>
      </Table>

      <Pagination style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Pagination.Prev style={{listStyle: 'none'}}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({ length: Math.ceil(tableData.length / itemsPerPage) }).map((_, index) => (
          <Pagination.Item style={{padding: '20px 15px', listStyle: 'none', }}
            key={index}
      active={currentPage === index + 1}
      onClick={() => handlePageChange(index + 1)}
      className={currentPage === index + 1 ? styles.activePaginationItem : ''}

          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next style={{listStyle: 'none'}}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(tableData.length / itemsPerPage)}
        />
      </Pagination>
    </div>
	);
  };
  


export default Main;
