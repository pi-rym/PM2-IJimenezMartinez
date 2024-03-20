const CarritoCompra = require("../index")

/*
    -CarritoCompra debería ser una clase
    -carritoCompra debería ser una instancia de la clase CarritoCompra
    -Debería guardar productos en una lista
    -Deberia tener un método llamado agregarProducto
    -Deberia tener un método llamado calcularTotal
    -Deberia tener un método llamado aplicarDescuento
    -El método agregarProduto debería agregar un producto a la lista
    -El método calcularTotal debería sumar los precios de los productos del carrito
    -El método aplicarDescuento debería aplicar un descuento al total de la compra
*/

describe('Clase CarritoCompra', ()=> {
    let carritoCompra;

    beforeEach (()=> {
        carritoCompra = new CarritoCompra()
    })

    describe('Sobre el constructor de la clase CarritoCompra', ()=>{

        it ('CarritoCompra debería ser una clase', ()=>{
            expect(typeof CarritoCompra.prototype.constructor).toBe('function')
        })

        it('carritoCompra debería ser una instancia de la clase CarritoCompra', ()=> {
            expect(carritoCompra instanceof CarritoCompra).toBe(true)
        })

        it('Debería guardar productos en una lista', ()=>{
            expect(carritoCompra.products).toEqual([])
        })
    })

    describe('Métodos de la clase CarritoCompra', ()=> {
        const product1 = {
            id:1,
            name:'Agenda',
            price: 30.00,
            quantity:3
        }

        const product2 = {
            id:2,
            name:'Marcador',
            price: 10.00,
            quantity:6
        }

        it('Deberia tener un método llamado agregarProducto', ()=> {
            expect(typeof carritoCompra.agregarProducto).toBe('function')
        })

        it('Deberia tener un método llamado calcularTotal', ()=> {
            expect(typeof carritoCompra.calcularTotal).toBe('function')
        })

        it('Deberia tener un método llamado aplicarDescuento', ()=> {
            expect(typeof carritoCompra.aplicarDescuento).toBe('function')
        })

        it('El método agregarProduto debería agregar un producto a la lista', ()=> {
            carritoCompra.agregarProducto(product1)
            expect(carritoCompra.products).toContain(product1)
        })

        it('El método calcularTotal debería sumar los precios de los productos del carrito', ()=> {
            carritoCompra.agregarProducto(product1)
            carritoCompra.agregarProducto(product2)

            const totalExpected = product1.price * product1.quantity + product2.price * product2.quantity
            
            expect(carritoCompra.calcularTotal()).toBe(totalExpected)
        })

        it('El método aplicarDescuento debería aplicar un descuento al total de la compra', ()=> {
            carritoCompra.agregarProducto(product1)
            carritoCompra.agregarProducto(product2)

            const subtotal = product1.price * product1.quantity + product2.price * product2.quantity

            const descuento = 25

            const totalExpected = subtotal - (subtotal * (descuento/100))
            const total = carritoCompra.aplicarDescuento(descuento)

            expect(total).toBe(totalExpected)
        })
    })
    })
