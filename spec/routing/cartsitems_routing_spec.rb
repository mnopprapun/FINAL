require "rails_helper"

RSpec.describe CartsitemsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/cartsitems").to route_to("cartsitems#index")
    end

    it "routes to #show" do
      expect(get: "/cartsitems/1").to route_to("cartsitems#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/cartsitems").to route_to("cartsitems#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/cartsitems/1").to route_to("cartsitems#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/cartsitems/1").to route_to("cartsitems#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/cartsitems/1").to route_to("cartsitems#destroy", id: "1")
    end
  end
end
