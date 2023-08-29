export default function ToggleLanguage() {
  return (
    <label className="relative inline-flex items-center cursor-pointer mt-16 ">
      <input type="checkbox" value="" className="sr-only peer" />
      <span className="mr-3 text-2xl text-dark-green ">En</span>
      <div className="w-11 h-6 bg-dark-green peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[9px] after:left-[38px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-dark-green"></div>
      <span className="ml-3 mr-20 text-2xl text-dark-green ">Fr</span>
    </label>
  )
}
