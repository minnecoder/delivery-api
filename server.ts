import App from './index'
import AddressRoute from './routes/address.route'
import CustomerHoursRoute from './routes/customerHours.route'
import CustomerNotesRoute from './routes/customerNotes.route'
import CustomersRoute from './routes/customers.route'
import DriverReportRoute from './routes/driverReport.route'
import DriversRoute from './routes/drivers.route'
import HubRoute from './routes/hub.route'
import IndexRoute from './routes/index.route'
import OrderItemRoute from './routes/orderItem.route'
import OrdersRoute from './routes/orders.route'
import OrganizationsRoute from './routes/organization.route'
import PackagesRoute from './routes/packages.route'
import PreviousSignersRoute from './routes/previousSigners.route'
import ProductsRoute from './routes/products.routes'
import StopsRoute from './routes/stops.routes'
import TeamsRoute from './routes/team.route'
import UserRoute from './routes/user.routes'
import VehiclesRoute from './routes/vehicles.routes'


const app = new App([
    new IndexRoute(),
    new AddressRoute(),
    new CustomerHoursRoute(),
    new CustomerNotesRoute(),
    new CustomersRoute(),
    new DriverReportRoute(),
    new DriversRoute(),
    new HubRoute(),
    new OrderItemRoute(),
    new OrdersRoute(),
    new OrganizationsRoute(),
    new PackagesRoute(),
    new PreviousSignersRoute(),
    new ProductsRoute(),
    new StopsRoute(),
    new TeamsRoute(),
    new UserRoute(),
    new VehiclesRoute()
])

app.listen()