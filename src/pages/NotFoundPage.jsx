import NotFoundState from '../components/status/NotFoundState'

function NotFoundPage() {
  return (
    <>
      <title>Сторінку не знайдено - Pokemon Dashboard</title>
      <NotFoundState title="Сторінку не знайдено" message="Такої адреси в дашборді немає." />
    </>
  )
}

export default NotFoundPage
