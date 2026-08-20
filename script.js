// ============================================
// PRODUCTOS
// ============================================

const productos = [
    {
        id: 1,
        nombre: "Playera Oversize",
        categoria: "Playeras",
        precio: 399,
        etiqueta: "Nuevo",
        descripcion:
            "Playera oversize de algodón con corte relajado y estilo urbano.",
        imagen:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 2,
        nombre: "Sudadera Essential",
        categoria: "Sudaderas",
        precio: 749,
        etiqueta: "Popular",
        descripcion:
            "Sudadera cómoda de corte moderno, ideal para uso diario.",
        imagen:
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 3,
        nombre: "Jeans Relaxed Fit",
        categoria: "Pantalones",
        precio: 899,
        etiqueta: "",
        descripcion:
            "Jeans de corte relajado con estilo casual y acabado clásico.",
        imagen:
            "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 4,
        nombre: "Chamarra Street",
        categoria: "Chamarras",
        precio: 1299,
        etiqueta: "Oferta",
        descripcion:
            "Chamarra urbana con diseño minimalista para combinar con cualquier outfit.",
        imagen:
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 5,
        nombre: "Playera Basic White",
        categoria: "Playeras",
        precio: 349,
        etiqueta: "",
        descripcion:
            "Playera básica blanca de algodón, ligera y versátil.",
        imagen:
            "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 6,
        nombre: "Sudadera Black Edition",
        categoria: "Sudaderas",
        precio: 799,
        etiqueta: "Nuevo",
        descripcion:
            "Sudadera negra de edición especial con estilo limpio y moderno.",
        imagen:
            "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 7,
        nombre: "Jeans Classic",
        categoria: "Pantalones",
        precio: 849,
        etiqueta: "",
        descripcion:
            "Jeans clásicos de mezclilla con corte cómodo.",
        imagen:
            "https://shendyvendy.com/cdn/shop/files/AZULOSCUROIV_a57195c5-151d-49ca-96dc-2aa9e4df690a.jpg?v=1753460515&width=1214"
    },

    {
        id: 8,
        nombre: "Chamarra Premium",
        categoria: "Chamarras",
        precio: 1499,
        etiqueta: "Popular",
        descripcion:
            "Chamarra premium con materiales resistentes y acabado elegante.",
        imagen:
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80"
    }
];


// ============================================
// ELEMENTOS DEL CATÁLOGO
// ============================================

const contenedorProductos =
    document.getElementById("contenedorProductos");

const buscador =
    document.getElementById("buscador");

const filtroCategoria =
    document.getElementById("filtroCategoria");

const filtroPrecio =
    document.getElementById("filtroPrecio");

const mensajeSinProductos =
    document.getElementById("mensajeSinProductos");


// ============================================
// MENÚ
// ============================================

const botonMenu =
    document.getElementById("botonMenu");

const menu =
    document.getElementById("menu");

botonMenu.addEventListener("click", () => {
    menu.classList.toggle("visible");
});

document
    .querySelectorAll(".menu a")
    .forEach((enlace) => {
        enlace.addEventListener("click", () => {
            menu.classList.remove("visible");
        });
    });


// ============================================
// CARRITO
// ============================================

const botonCarrito =
    document.getElementById("botonCarrito");

const cerrarCarrito =
    document.getElementById("cerrarCarrito");

const panelCarrito =
    document.getElementById("panelCarrito");

const fondoOscuro =
    document.getElementById("fondoOscuro");

const contadorCarrito =
    document.getElementById("contadorCarrito");

const listaCarrito =
    document.getElementById("listaCarrito");

const totalCarrito =
    document.getElementById("totalCarrito");


// Recuperar carrito guardado
let carrito =
    JSON.parse(
        localStorage.getItem("carrito")
    ) || [];


// ============================================
// MODAL DE PRODUCTO
// ============================================

const modalProducto =
    document.getElementById("modalProducto");

const cerrarModalProducto =
    document.getElementById("cerrarModalProducto");

const modalImagen =
    document.getElementById("modalImagen");

const modalCategoria =
    document.getElementById("modalCategoria");

const modalNombre =
    document.getElementById("modalNombre");

const modalPrecio =
    document.getElementById("modalPrecio");

const modalDescripcion =
    document.getElementById("modalDescripcion");

const modalTalla =
    document.getElementById("modalTalla");

const modalCantidad =
    document.getElementById("modalCantidad");

const agregarDesdeModal =
    document.getElementById("agregarDesdeModal");

let productoSeleccionado = null;


// ============================================
// MOSTRAR PRODUCTOS
// ============================================

function mostrarProductos(listaProductos) {

    contenedorProductos.innerHTML = "";

    if (listaProductos.length === 0) {

        mensajeSinProductos.style.display =
            "block";

        return;
    }

    mensajeSinProductos.style.display =
        "none";

    listaProductos.forEach((producto) => {

        const tarjeta =
            document.createElement("article");

        tarjeta.classList.add(
            "tarjeta-producto"
        );

        tarjeta.innerHTML = `

            <div class="contenedor-imagen">

                ${
                    producto.etiqueta
                        ? `
                            <span class="etiqueta">
                                ${producto.etiqueta}
                            </span>
                        `
                        : ""
                }

                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                >

            </div>

            <div class="informacion-producto">

                <p class="categoria">
                    ${producto.categoria}
                </p>

                <h3>
                    ${producto.nombre}
                </h3>

                <p class="precio">
                    ${formatearPrecio(
                        producto.precio
                    )}
                </p>

                <button
                    class="agregar-carrito"
                    data-id="${producto.id}"
                >
                    Agregar al carrito
                </button>

            </div>
        `;

        // Abrir modal al hacer clic en la tarjeta
        tarjeta.addEventListener(
            "click",
            (evento) => {

                if (
                    evento.target.classList.contains(
                        "agregar-carrito"
                    )
                ) {
                    return;
                }

                abrirProducto(
                    producto.id
                );
            }
        );

        contenedorProductos.appendChild(
            tarjeta
        );
    });

    activarBotonesCarrito();
}


// ============================================
// FILTRAR PRODUCTOS
// ============================================

function filtrarProductos() {

    const textoBusqueda =
        buscador.value
            .toLowerCase()
            .trim();

    const categoriaSeleccionada =
        filtroCategoria.value;

    const precioSeleccionado =
        filtroPrecio.value;

    const productosFiltrados =
        productos.filter((producto) => {

            const coincideNombre =
                producto.nombre
                    .toLowerCase()
                    .includes(
                        textoBusqueda
                    );

            const coincideCategoria =
                categoriaSeleccionada ===
                "todos"
                ||
                producto.categoria ===
                categoriaSeleccionada;

            const coincidePrecio =
                precioSeleccionado ===
                "todos"
                ||
                producto.precio <=
                Number(
                    precioSeleccionado
                );

            return (
                coincideNombre
                &&
                coincideCategoria
                &&
                coincidePrecio
            );
        });

    mostrarProductos(
        productosFiltrados
    );
}


// ============================================
// EVENTOS DE FILTROS
// ============================================

buscador.addEventListener(
    "input",
    filtrarProductos
);

filtroCategoria.addEventListener(
    "change",
    filtrarProductos
);

filtroPrecio.addEventListener(
    "change",
    filtrarProductos
);


// ============================================
// ACTIVAR BOTONES DEL CATÁLOGO
// ============================================

function activarBotonesCarrito() {

    const botonesAgregar =
        document.querySelectorAll(
            ".agregar-carrito"
        );

    botonesAgregar.forEach((boton) => {

        boton.addEventListener(
            "click",
            (evento) => {

                evento.stopPropagation();

                const idProducto =
                    Number(
                        boton.dataset.id
                    );

                const producto =
                    productos.find(
                        (producto) =>
                            producto.id ===
                            idProducto
                    );

                agregarProducto(
                    producto
                );
            }
        );
    });
}


// ============================================
// AGREGAR DESDE TARJETA
// ============================================

function agregarProducto(producto) {

    agregarProductoConOpciones(
        producto,
        "M",
        1
    );

    abrirCarrito();
}


// ============================================
// AGREGAR CON TALLA Y CANTIDAD
// ============================================

function agregarProductoConOpciones(
    producto,
    talla,
    cantidad
) {

    const productoExistente =
        carrito.find(
            (elemento) =>
                elemento.id ===
                producto.id
                &&
                elemento.talla ===
                talla
        );

    if (productoExistente) {

        productoExistente.cantidad +=
            cantidad;

    } else {

        carrito.push({
            ...producto,
            talla:
                talla,
            cantidad:
                cantidad
        });
    }

    actualizarCarrito();
}


// ============================================
// ELIMINAR PRODUCTO
// ============================================

function eliminarProducto(
    idProducto,
    tallaProducto
) {

    carrito =
        carrito.filter(
            (producto) =>
                !(
                    producto.id ===
                    idProducto
                    &&
                    producto.talla ===
                    tallaProducto
                )
        );

    actualizarCarrito();
}


// ============================================
// ACTUALIZAR CARRITO
// ============================================

function actualizarCarrito() {

    listaCarrito.innerHTML =
        "";

    if (carrito.length === 0) {

        listaCarrito.innerHTML = `
            <p class="carrito-vacio">
                Tu carrito está vacío.
            </p>
        `;

    } else {

        carrito.forEach((producto) => {

            const elemento =
                document.createElement(
                    "div"
                );

            elemento.classList.add(
                "producto-carrito"
            );

            elemento.innerHTML = `

                <div>

                    <h4>
                        ${producto.nombre}
                    </h4>

                    <p>
                        Talla:
                        ${producto.talla}
                    </p>

                    <p>
                        ${producto.cantidad}
                        ×
                        ${formatearPrecio(
                            producto.precio
                        )}
                    </p>

                </div>

                <button>
                    Eliminar
                </button>
            `;

            const botonEliminar =
                elemento.querySelector(
                    "button"
                );

            botonEliminar.addEventListener(
                "click",
                () => {

                    eliminarProducto(
                        producto.id,
                        producto.talla
                    );
                }
            );

            listaCarrito.appendChild(
                elemento
            );
        });
    }

    const cantidadProductos =
        carrito.reduce(
            (
                acumulado,
                producto
            ) => {

                return (
                    acumulado
                    +
                    producto.cantidad
                );
            },
            0
        );

    const total =
        carrito.reduce(
            (
                acumulado,
                producto
            ) => {

                return (
                    acumulado
                    +
                    producto.precio
                    *
                    producto.cantidad
                );
            },
            0
        );

    contadorCarrito.textContent =
        cantidadProductos;

    totalCarrito.textContent =
        formatearPrecio(
            total
        );

    guardarCarrito();
}


// ============================================
// GUARDAR CARRITO
// ============================================

function guardarCarrito() {

    localStorage.setItem(
        "carrito",
        JSON.stringify(
            carrito
        )
    );
}


// ============================================
// ABRIR / CERRAR CARRITO
// ============================================

function abrirCarrito() {

    panelCarrito.classList.add(
        "abierto"
    );

    fondoOscuro.classList.add(
        "visible"
    );
}

function ocultarCarrito() {

    panelCarrito.classList.remove(
        "abierto"
    );

    fondoOscuro.classList.remove(
        "visible"
    );
}

botonCarrito.addEventListener(
    "click",
    abrirCarrito
);

cerrarCarrito.addEventListener(
    "click",
    ocultarCarrito
);

fondoOscuro.addEventListener(
    "click",
    ocultarCarrito
);


// ============================================
// ABRIR MODAL DE PRODUCTO
// ============================================

function abrirProducto(
    idProducto
) {

    const producto =
        productos.find(
            (producto) =>
                producto.id ===
                idProducto
        );

    if (!producto) {
        return;
    }

    productoSeleccionado =
        producto;

    modalImagen.src =
        producto.imagen;

    modalImagen.alt =
        producto.nombre;

    modalCategoria.textContent =
        producto.categoria;

    modalNombre.textContent =
        producto.nombre;

    modalPrecio.textContent =
        formatearPrecio(
            producto.precio
        );

    modalDescripcion.textContent =
        producto.descripcion;

    modalTalla.value =
        "M";

    modalCantidad.value =
        1;

    modalProducto.classList.add(
        "visible"
    );
}


// ============================================
// CERRAR MODAL
// ============================================

function cerrarProducto() {

    modalProducto.classList.remove(
        "visible"
    );

    productoSeleccionado =
        null;
}

cerrarModalProducto.addEventListener(
    "click",
    cerrarProducto
);

modalProducto.addEventListener(
    "click",
    (evento) => {

        if (
            evento.target ===
            modalProducto
        ) {

            cerrarProducto();
        }
    }
);


// ============================================
// AGREGAR DESDE MODAL
// ============================================

agregarDesdeModal.addEventListener(
    "click",
    () => {

        if (
            !productoSeleccionado
        ) {
            return;
        }

        const talla =
            modalTalla.value;

        const cantidad =
            Number(
                modalCantidad.value
            );

        if (
            !Number.isInteger(cantidad)
            ||
            cantidad <= 0
        ) {

            alert(
                "Selecciona una cantidad válida."
            );

            return;
        }

        agregarProductoConOpciones(
            productoSeleccionado,
            talla,
            cantidad
        );

        cerrarProducto();

        abrirCarrito();
    }
);


// ============================================
// FORMATO DE PRECIO
// ============================================

function formatearPrecio(precio) {

    return precio.toLocaleString(
        "es-MX",
        {
            style:
                "currency",

            currency:
                "MXN"
        }
    );
}


// ============================================
// NEWSLETTER
// ============================================

const formularioSuscripcion =
    document.getElementById(
        "formularioSuscripcion"
    );

const mensajeFormulario =
    document.getElementById(
        "mensajeFormulario"
    );

formularioSuscripcion.addEventListener(
    "submit",
    (evento) => {

        evento.preventDefault();

        const correo =
            document
                .getElementById(
                    "correo"
                )
                .value
                .trim();

        mensajeFormulario.textContent =
            `Gracias. Enviaremos novedades a ${correo}.`;

        formularioSuscripcion.reset();
    }
);


// ============================================
// FINALIZAR COMPRA
// ============================================

document
    .getElementById(
        "finalizarCompra"
    )
    .addEventListener(
        "click",
        () => {

            if (
                carrito.length === 0
            ) {

                alert(
                    "Primero agrega productos al carrito."
                );

                return;
            }

            alert(
                "La pantalla de checkout será la siguiente etapa."
            );
        }
    );


// ============================================
// CERRAR MODAL CON ESC
// ============================================

document.addEventListener(
    "keydown",
    (evento) => {

        if (
            evento.key ===
            "Escape"
        ) {

            cerrarProducto();
            ocultarCarrito();
        }
    }
);


// ============================================
// INICIAR TIENDA
// ============================================

mostrarProductos(
    productos
);

function actualizarCarrito() {

    listaCarrito.innerHTML = "";

    // ============================================
    // CARRITO VACÍO
    // ============================================

    if (carrito.length === 0) {

        listaCarrito.innerHTML = `
            <p class="carrito-vacio">
                Tu carrito está vacío.
            </p>
        `;

    }

    // ============================================
    // MOSTRAR PRODUCTOS
    // ============================================

    else {

        carrito.forEach((producto) => {

            const elemento =
                document.createElement(
                    "div"
                );

            elemento.classList.add(
                "producto-carrito"
            );


            // Subtotal individual
            const subtotal =
                producto.precio *
                producto.cantidad;


            elemento.innerHTML = `

                <!-- Imagen -->

                <div class="producto-carrito-imagen">

                    <img
                        src="${producto.imagen}"
                        alt="${producto.nombre}"
                    >

                </div>


                <!-- Información -->

                <div class="producto-carrito-info">

                    <h4>
                        ${producto.nombre}
                    </h4>


                    <p class="producto-carrito-talla">
                        Talla:
                        ${producto.talla}
                    </p>


                    <p class="producto-carrito-precio">

                        ${formatearPrecio(
                            producto.precio
                        )}

                    </p>


                    <!-- Controles -->

                    <div class="producto-carrito-controles">


                        <div class="control-cantidad">

                            <button
                                class="boton-restar"
                                type="button"
                            >
                                −
                            </button>


                            <span>
                                ${producto.cantidad}
                            </span>


                            <button
                                class="boton-sumar"
                                type="button"
                            >
                                +
                            </button>

                        </div>


                        <button
                            class="boton-eliminar-carrito"
                            type="button"
                        >
                            Eliminar
                        </button>

                    </div>


                    <p class="subtotal-producto">

                        Subtotal:

                        ${formatearPrecio(
                            subtotal
                        )}

                    </p>

                </div>
            `;


            // ====================================
            // BOTÓN +
            // ====================================

            const botonSumar =
                elemento.querySelector(
                    ".boton-sumar"
                );


            botonSumar.addEventListener(
                "click",
                () => {

                    aumentarCantidad(
                        producto.id,
                        producto.talla
                    );

                }
            );


            // ====================================
            // BOTÓN -
            // ====================================

            const botonRestar =
                elemento.querySelector(
                    ".boton-restar"
                );


            botonRestar.addEventListener(
                "click",
                () => {

                    disminuirCantidad(
                        producto.id,
                        producto.talla
                    );

                }
            );


            // ====================================
            // ELIMINAR
            // ====================================

            const botonEliminar =
                elemento.querySelector(
                    ".boton-eliminar-carrito"
                );


            botonEliminar.addEventListener(
                "click",
                () => {

                    eliminarProducto(
                        producto.id,
                        producto.talla
                    );

                }
            );


            listaCarrito.appendChild(
                elemento
            );

        });

    }


    // ============================================
    // CANTIDAD TOTAL DE ARTÍCULOS
    // ============================================

    const cantidadProductos =
        carrito.reduce(
            (
                acumulado,
                producto
            ) => {

                return (
                    acumulado +
                    producto.cantidad
                );

            },

            0
        );


    // ============================================
    // TOTAL DE COMPRA
    // ============================================

    const total =
        carrito.reduce(
            (
                acumulado,
                producto
            ) => {

                return (
                    acumulado
                    +
                    producto.precio
                    *
                    producto.cantidad
                );

            },

            0
        );


    contadorCarrito.textContent =
        cantidadProductos;


    totalCarrito.textContent =
        formatearPrecio(
            total
        );


    // Guardar cambios
    guardarCarrito();
}

// ============================================
// AUMENTAR CANTIDAD
// ============================================

function aumentarCantidad(
    idProducto,
    tallaProducto
) {

    const producto =
        carrito.find(
            (producto) =>
                producto.id ===
                idProducto
                &&
                producto.talla ===
                tallaProducto
        );


    if (!producto) {
        return;
    }


    producto.cantidad++;


    actualizarCarrito();
}

// ============================================
// DISMINUIR CANTIDAD
// ============================================

function disminuirCantidad(
    idProducto,
    tallaProducto
) {

    const producto =
        carrito.find(
            (producto) =>
                producto.id ===
                idProducto
                &&
                producto.talla ===
                tallaProducto
        );


    if (!producto) {
        return;
    }


    // Si tiene más de 1 unidad
    if (
        producto.cantidad > 1
    ) {

        producto.cantidad--;

    }


    // Si solamente tiene una,
    // eliminamos el producto
    else {

        eliminarProducto(
            idProducto,
            tallaProducto
        );

        return;
    }


    actualizarCarrito();
}
