configure do
  enable :sessions
end

get '/' do
  if logged_in?
    @users = User.all
  end
  erb :index
end

# SESSIONS

get '/sessions/new' do
  erb :sign_in
end

post '/sessions' do
  @user = User.find_by(user_name: params[:user_name])
  if @user
    if @user.password == params[:password]
      session[:user_id] = @user.id
      redirect '/'
  	end
  else
  	erb :_sign_up_error
  end
end

delete '/sessions/:id' do
  session.clear
  redirect '/'
end

# USERS 

get '/users/new' do
  erb :sign_up
end

post '/users' do
  create
  redirect '/'
end

private

def create
  @user = User.new(params[:user])
  @user.password = params[:password]
  @user.save
end