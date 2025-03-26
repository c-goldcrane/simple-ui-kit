// import { useState, ChangeEvent, useEffect } from "react";
// import styles from "./styles.module.css";

// export interface SearchBarProps {
//   onSearch?: (query: string) => void;
//   placeholder?: string;
//   buttonText?: string;
//   className?: string;
//   autoSearch?: boolean;
//   autoSearchDelay?: number;
//   initialValue?: string;
//   isLoading?: boolean;
// }

// const SearchBar: React.FC<SearchBarProps> = ({
//   onSearch,
//   placeholder = "검색어를 입력하세요",
//   buttonText = "검색",
//   className = "",
//   autoSearch = false,
//   autoSearchDelay = 500,
//   initialValue = "",
//   isLoading = false,
// }) => {
//   const [query, setQuery] = useState(initialValue);

//   useEffect(() => {
//     setQuery(initialValue);
//   }, [initialValue]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     console.log("query", query);

//     onSearch?.(query);
//   };

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//   };

//   const handleReset = () => {
//     setQuery("");
//     onSearch?.("");
//   };

//   return <div>hello</div>;
// };

// export default SearchBar;

// //  <form
// //       onSubmit={handleSubmit}
// //       className={`${styles.container} ${className}`.trim()}
// //     >
// //       <div className={styles.inputWrapper}>
// //         <input
// //           type="text"
// //           value={query}
// //           onChange={handleChange}
// //           placeholder={placeholder}
// //           className={styles.input}
// //           disabled={isLoading}
// //         />
// //         {query && (
// //           <button
// //             type="button"
// //             onClick={handleReset}
// //             className={styles.resetButton}
// //             disabled={isLoading}
// //           >
// //             ×
// //           </button>
// //         )}
// //       </div>
// //       <button
// //         type="submit"
// //         className={`${styles.button} ${isLoading ? styles.loading : ""}`}
// //         disabled={isLoading}
// //       >
// //         {isLoading ? "검색 중..." : buttonText}
// //       </button>
// //     </form>
