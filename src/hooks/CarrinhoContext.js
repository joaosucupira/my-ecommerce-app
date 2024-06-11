// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";

// export const CarrinhoContext = createContext();

// function CarrinhoContextProvider({ children }) {
//   const [listCart, setlistCart] = useState([]);

//   useEffect(() => {
//     buscarProdutosLocaStorage();
//   }, []);
//   function buscarProdutosLocaStorage() {
//     const produtosLocalStorage = localStorage.getItem("carrinho_produtos");

//     if (produtosLocalStorage) {
//       const produtosProdutos = JSON.parse(produtosLocalStorage);
//       setlistCart(produtosProdutos);
//     }
//   }

//   function salvarProdutos(lista) {
//     setlistCart(lista);
//     const listaDeProdutos = JSON.stringify(lista);
//     localStorage.setItem("carrinho_produtos", listaDeProdutos);
//   }

//   const adicionarCarrinho = async (produto) => {
//     const qtdProdutosNoCarrinho = listCart.filter(
//       (item) => item.idProduto == produto.idProduto
//     );
//     if (qtdProdutosNoCarrinho.length > 0) {
//       return toast.error("Product has already been added to cart.", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     }

//     const listaProdutosAtualizado = [produto, ...listCart];
//     salvarProdutos(listaProdutosAtualizado);
//   };
//   function removerProduto(idProduto) {
//     const listaProdutosAtualizado = listCart.filter(
//       (item) => item.idProduto != idProduto
//     );

//     salvarProdutos(listaProdutosAtualizado);
//   }

//   return (
//     <CarrinhoContext.Provider
//       value={{ listCart, adicionarCarrinho, removerProduto }}
//     >
//       {children}
//     </CarrinhoContext.Provider>
//   );
// }

// export default CarrinhoContextProvider;