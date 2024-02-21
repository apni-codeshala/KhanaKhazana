const Cuisines = ({ cuisine }) => {
    if (typeof cuisine == 'string') {
        return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{cuisine}</span>
    }else{
        return null;
    }

};

export default Cuisines;