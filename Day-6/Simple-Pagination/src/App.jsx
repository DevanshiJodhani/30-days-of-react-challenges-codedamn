import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function App() {
	const [posts, setPosts] = useState([])
	const [currentPage, setCurrentPage] = useState(1)

	const fetchPosts = async (pageNum) => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
		)
		const data = await response.json()

		// If it's the first page, replace data. Else, append.
		if (pageNum === 1) {
			setPosts(data)
		} else {
			setPosts((prevPosts) => [...prevPosts, ...data])
		}
	}

	// Load first 10 records on mount
	useEffect(() => {
		fetchPosts(1)
	}, [])

	const handleNext = () => {
		const nextPage = currentPage + 1
		setCurrentPage(nextPage)
		fetchPosts(nextPage)
	}

	return (
		<Container>
			<Title>Paginated Posts Viewer</Title>
			<StyledTable>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Body</th>
					</tr>
				</thead>
				<tbody>
					{posts.map((post) => (
						<tr key={post.id}>
							<td>{post.id}</td>
							<td>{post.title}</td>
							<td>{post.body}</td>
						</tr>
					))}
				</tbody>
			</StyledTable>
			<NextButton id="next" onClick={handleNext}>
				Next Items
			</NextButton>
		</Container>
	)
}

const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`

const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  thead {
    background-color: #34495e;
    color: white;
  }

  th, td {
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: left;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }
`

const NextButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 12px 25px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }
`

export default App
