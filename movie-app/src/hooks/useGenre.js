const useGenres = (selectedGenres) => {
    if (selectedGenres.length < 1) return ""
    const GenresIds = selectedGenres.map((movie) => movie.id)
    // return GenresIds.toString()
    return GenresIds.reduce((acc, curr) => acc + "," + curr)
}
export default useGenres