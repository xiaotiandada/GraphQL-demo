import React from 'react'
import { useQuery, useLazyQuery, useMutation } from '@apollo/client'
import { ADD_COURSE, GET_ALL, GET_COURSE, GET_STUDENT, ADD_STUDENT } from '../../graphql'


function CourseItem () {
	const { loading, error, data } = useQuery<SCHEMA.QueryGetCourse>(GET_COURSE, {
		pollInterval: 3000
	})

	console.log('data', loading, error, data)
	if (loading) return <span>Loading...</span>
	if (error) return <span>`Error! ${error.message}`</span>

	return (
		<ul>
			<li><h3>课程</h3></li>
			{
				data?.getCourse.map((i, idx) => (<li key={`${idx}-${i.title}`}>
				课程：{i.title}，
				简介：{i.desc}，
				作者：{i.author}，
				页数：{i.page}
				</li>))
			}
		</ul>
	)
}

function StudentItem () {
	const { loading, error, data } = useQuery<SCHEMA.QueryGetStudent>(GET_STUDENT, {
		pollInterval: 3000
	})

	console.log('data', loading, error, data)
	if (loading) return <span>Loading...</span>
	if (error) return <span>`Error! ${error.message}`</span>

	return (
		<ul>
			<li><h3>学生</h3></li>
			{
				data?.getStudent.map((i) => (<li key={i._id}>
				姓名：{i.name}，
				性别：{i.sex}，
				年龄：{i.age}
				</li>))
			}
		</ul>
	)
}

function FetchAll() {
	const [getAll, { loading, error, data }] = useLazyQuery(GET_ALL)

	if (loading) return <span>Loading...</span>
	if (error) return <span>`Error! ${error.message}`</span>

	console.log('all', data)

	return (<button className="btn btn-primary" onClick={() => getAll()}>Fetch All</button>)
}

function AddCourse() {
	const [addCourse, { loading, error, data }] = useMutation(ADD_COURSE, {
		variables: {
			title: `course-${Date.now()}`,
			author: `course-author-${Date.now()}`,
			desc: `course-desc-${Date.now()}`,
			page: 100
		}
	})

	if (loading) return <span>Submitting...</span>
	if (error) return <span>`Submission error!  ${error.message}`</span>

	console.log('all', data)

	return (<button className="btn btn-primary" onClick={() => addCourse()}>添加课程</button>)
}

function AddStudent() {
	const [addStudent, { loading, error, data }] = useMutation(ADD_STUDENT, {
		variables: {
			name: `student-${Date.now()}`,
			sex: '男',
			age: 18
		}
	})

	if (loading) return <span>Submitting...</span>
	if (error) return <span>`Submission error!  ${error.message}`</span>

	console.log('all', data)

	return (<button className="btn btn-primary" onClick={() => addStudent()}>添加学生</button>)
}

const Home: React.FC = () => {
	return (
		<div>
			<FetchAll />
			<AddCourse />
			<AddStudent />
			<CourseItem />
			<StudentItem />
		</div>
	)
}

export default Home
